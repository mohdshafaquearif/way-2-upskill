import fetch from 'node-fetch';

async function testAPI() {
  console.log('🧪 Testing API endpoints...\n');
  
  try {
    // Test health endpoint
    console.log('1. Testing health endpoint...');
    const healthResponse = await fetch('http://localhost:3001/api/health');
    const healthData = await healthResponse.json();
    console.log('✅ Health check:', healthData);
    
    // Test courses endpoint
    console.log('\n2. Testing courses endpoint...');
    const coursesResponse = await fetch('http://localhost:3001/api/courses');
    const courses = await coursesResponse.json();
    console.log(`✅ Found ${courses.length} courses`);
    courses.forEach(course => {
      console.log(`   - ${course.title}: $${course.price}`);
    });
    
    // Test instructors endpoint
    console.log('\n3. Testing instructors endpoint...');
    const instructorsResponse = await fetch('http://localhost:3001/api/instructors');
    const instructors = await instructorsResponse.json();
    console.log(`✅ Found ${instructors.length} instructors`);
    instructors.forEach(instructor => {
      console.log(`   - ${instructor.first_name} ${instructor.last_name}`);
    });
    
    console.log('\n🎉 All API endpoints are working correctly!');
    
  } catch (error) {
    console.error('❌ API test failed:', error.message);
  }
}

testAPI();

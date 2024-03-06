export async function getDashboard() {
  const response = await fetch("http://localhost:3000/data/data.json");
  const data = await response.json();
  return data.dashboard;
}

export async function getActivities() {
  const response = await fetch("http://localhost:3000/data/data.json");
  const data = await response.json();
  return data.activities;
}

export async function getMystudies() {
  const response = await fetch("http://localhost:3000/data/data.json");
  const data = await response.json();
  return data.mystudies;
}

export async function getProfile() {
  const response = await fetch("http://localhost:3000/data/data.json");
  const data = await response.json();
  return data.profile;
}

export async function getEditstudy() {
  const response = await fetch("http://localhost:3000/data/data.json");
  const data = await response.json();
  return data.editStudy;
}

export async function getStudentManagement() {
  const response = await fetch("http://localhost:3000/data/data.json");
  const data = await response.json();
  return data.studentManagement;
}

const url =
  process.env.NODE_ENV === "development"
    ? process.env.REACT_APP_FE_URL_DEV
    : process.env.REACT_APP_FE_URL_PROD;

export async function getDashboard() {
  const response = await fetch(`${url}/data/data.json`);
  const data = await response.json();
  return data.dashboard;
}

export async function getAllActivities() {
  const response = await fetch(`${url}/data/data.json`);
  const data = await response.json();
  return data.activities;
}

export async function getCompletedActivities() {
  const response = await fetch(`${url}/data/data.json`);
  const data = await response.json();
  return data.activities.filter((activity) => activity.status === "Completed");
}

export async function getMystudies() {
  const response = await fetch(`${url}/data/data.json`);
  const data = await response.json();
  return data.mystudies;
}

export async function getProfile() {
  const response = await fetch(`${url}/data/data.json`);
  const data = await response.json();
  return data.profile;
}

export async function getDetailStudy() {
  const response = await fetch(`${url}/data/data.json`);
  const data = await response.json();
  return data.detailStudy;
}

export async function getStudyActivities() {
  const response = await fetch(`${url}/data/data.json`);
  const data = await response.json();
  return data.studyActivities;
}

export async function getStudentManagement() {
  const response = await fetch(`${url}/data/data.json`);
  const data = await response.json();
  return data.studentManagement;
}

export async function getFineStatus() {
  const response = await fetch(`${url}/data/data.json`);
  const data = await response.json();
  return data.fineStatus;
}

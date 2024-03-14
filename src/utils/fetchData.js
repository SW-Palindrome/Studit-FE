export default async function fetchData(
  getDataFunc,
  setStates,
  attributes,
  setLoading,
) {
  try {
    const data = await getDataFunc();
    for (let i = 0; i < setStates.length; i++) {
      if (attributes[i] === null) setStates[i](data);
      else setStates[i](data[attributes[i]]);
    }
  } catch (error) {
    console.log("서버 오류입니다. 다시 시도해주세요.");
  } finally {
    if (setLoading !== null) setLoading(false);
  }
}

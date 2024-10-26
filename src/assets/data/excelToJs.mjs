import XLSX from 'xlsx';
import fs from 'fs';

//파일 경로
const excelPath = 'src/assets/data/info.xlsx';
const jsPath = 'src/assets/data';

const excelToJs = () => {
  //엑셀 파일 읽기
  const workbook = XLSX.readFile(excelPath);

  //첫번째 시트의 데이터를 JSON으로 변환
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];
  const data = XLSX.utils.sheet_to_json(sheet);

  const pictureData = data.map((item) => ({
    order: item['순번'],
    season: item['계절'],
    flag: item['기수'],
    name: item['이름'],
    dept: item['학과'],
    camera: item['기종'],
    title: item['제목'],
    content: item['설명'],
    address: item['사진 주소'],
  }));

  //JSON 데이터를 js 파일로 저장
  const jsContent = `export const pictureData=${JSON.stringify(
    pictureData,
    null,
    2,
  )}`;
  fs.writeFileSync(`${jsPath}/pictureData.js`, jsContent, 'utf-8');

  console.log('excelToJs done');
};

excelToJs();

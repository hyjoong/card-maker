const url = process.env.REACT_APP_CLOUDINARY_API_KEY;
const name = process.env.REACT_APP_CLOUDINARY_PROJECT_NAME;

export default class ImageUploader {
  async upload(file: any) {
    const data = new FormData();
    // file을 업로드했다면 서버에 있는 이미지의 url을 전달해줄 것이다.
    // 서버에 업로드하고 업로드가 완료되면 그 결과값을 return 해야하니까
    // async를 하는 것이 좋을 것이다.
    // FormData.append()를 통해서 간단하게 data 파일을 업로드 할 수 있다.
    data.append("file", file);
    data.append("upload_preset", `${name}`);
    const result = await fetch(`${url}`, {
      method: "POST",
      body: data,
    });
    return await result.json();
  }
}

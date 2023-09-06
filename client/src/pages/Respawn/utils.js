export const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });

export const TOAST_UTILS = {
  autoClose: 2000,
  newestOnTop: true,
  closeOnClick: true,
};

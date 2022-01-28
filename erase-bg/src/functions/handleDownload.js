export const handleDownload = (file) => {
  const downloadLink = document.createElement("a");
  downloadLink.href = file;
  downloadLink.download = "Untitled Image";
  downloadLink.click();
};

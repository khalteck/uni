const FileDisplay = ({ filePath }) => {
  const decodedFilePath = decodeURIComponent(filePath);

  return (
    <embed
      src={decodedFilePath}
      width="100%"
      height="100%"
      type="application/pdf"
    />
  );
};

export default FileDisplay;

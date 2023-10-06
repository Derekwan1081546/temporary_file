import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Model() {
  const { username } = useParams();
  const [modelFile, setModelFile] = useState(null);

  useEffect(() => {
    // 模擬請求
    const mockResponseData = {
      method: "GET",
      response: {
        messages: "这是模拟的响应数据",
      },
    };

    // 測試
    setTimeout(() => {
      // 使用數據更新
      setModelFile(JSON.stringify(mockResponseData, null, 2));
    }, 1000); // 延遲設計
  }, [username]);

  // 提供下載選項並處理資料 => 虛擬標籤
  function handleDownload() {
    if (modelFile) {
      const a = document.createElement("a");
      const blob = new Blob([modelFile], { type: "application/json" }); // 使用JSON数据类型
      const url = URL.createObjectURL(blob);
      a.href = url;
      a.download = "model-file-name.json"; // 更改文件名和擴展名
      a.click();
      URL.revokeObjectURL(url); // 释放URL对象
    }
  }

  return (
    <div>
      <h1>模型預覽</h1>
      {modelFile ? (
        <>
          <pre>{modelFile}</pre>
          <button onClick={handleDownload}>下載模型</button>
        </>
      ) : (
        <p>正在加載模型...</p>
      )}
    </div>
  );
}

export default Model;

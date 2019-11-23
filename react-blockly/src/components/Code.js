import React from 'react';
import './Code.css';

const Code = (props) => {
  const { code } = props;

  return (
    <div id='code'>
      上で組んだブロックのコードが以下に出力されます
      <pre>{code}</pre>
    </div>
  );
};

export default Code;

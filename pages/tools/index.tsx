import Link from 'next/link';
import { useState } from 'react';

export default function Tools() {
  const [text, setText] = useState('');
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const tools = [
    {
      id: 'text-analyzer',
      name: 'テキスト分析ツール',
      description: '入力されたテキストの文字数、単語数、行数を分析します。',
      icon: '📊'
    },
    {
      id: 'json-formatter',
      name: 'JSONフォーマッター',
      description: 'JSONデータを整形し、読みやすい形式に変換します。',
      icon: '🔧'
    },
    {
      id: 'markdown-preview',
      name: 'Markdownプレビュー',
      description: 'Markdownテキストをリアルタイムでプレビューできます。',
      icon: '📝'
    }
  ];

  const handleAnalyzeText = () => {
    setLoading(true);
    // テキスト分析の実装例
    const analysis = {
      chars: text.length,
      words: text.trim().split(/\s+/).length,
      lines: text.split('\n').length
    };
    setResult(`
      文字数: ${analysis.chars}
      単語数: ${analysis.words}
      行数: ${analysis.lines}
    `);
    setLoading(false);
  };

  return (
    <div className="py-12">
      <div className="container max-w-3xl">
        <h1 className="heading-1 text-center mb-12">無料ツール</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tools.map((tool) => (
            <div key={tool.id} className="card">
              <div className="text-4xl mb-4">{tool.icon}</div>
              <h2 className="text-xl font-bold mb-3">{tool.name}</h2>
              <p className="text-gray-600 mb-4">{tool.description}</p>
              <button 
                className="button-primary w-full"
                onClick={() => setResult('')}
              >
                使ってみる
              </button>
            </div>
          ))}
        </div>

        <div className="card max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">テキスト分析ツール</h2>
          <div className="mb-4">
            <textarea
              className="w-full h-40 p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="ここにテキストを入力してください..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <button
            className="button-primary w-full mb-4"
            onClick={handleAnalyzeText}
            disabled={loading || !text}
          >
            {loading ? '分析中...' : '分析する'}
          </button>
          {result && (
            <div className="bg-gray-100 p-4 rounded-lg">
              <pre className="whitespace-pre-wrap">{result}</pre>
            </div>
          )}
        </div>

        <div className="text-center mt-12">
          <p className="text-xl text-gray-600 mb-4">
            より高度な機能が必要な場合は、カスタマイズされたツールを開発いたします。
          </p>
          <Link href="/contact" className="button-primary">
            お問い合わせ
          </Link>
        </div>
      </div>
    </div>
  );
}

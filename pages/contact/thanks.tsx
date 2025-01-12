import Link from 'next/link';

export default function Thanks() {
  return (
    <div className="py-20">
      <div className="container max-w-2xl text-center">
        <div className="card">
          <div className="text-5xl mb-8">🎉</div>
          <h1 className="heading-1 mb-6">
            お問い合わせ
            <br />
            ありがとうございます
          </h1>
          
          <p className="text-lg text-gray-600 mb-8">
            内容を確認次第、担当者よりご連絡させていただきます。
            <br />
            通常、1-2営業日以内にご返信いたします。
          </p>

          <div className="space-y-4">
            <Link href="/" className="button-primary block">
              トップページへ戻る
            </Link>
            <Link href="/tools" className="button-secondary block">
              無料ツールを試す
            </Link>
          </div>
        </div>

        <div className="mt-12 text-gray-600">
          <p className="mb-4">
            お急ぎの方はお電話でもご対応可能です
          </p>
          <p className="text-2xl font-bold text-indigo-600">
            03-1234-5678
          </p>
          <p className="mt-2">
            受付時間: 平日 9:00〜18:00
          </p>
        </div>
      </div>
    </div>
  );
}

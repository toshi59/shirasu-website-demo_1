import { useState, FormEvent } from 'react';
import { useRouter } from 'next/router';

export default function Contact() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    email: '',
    phone: '',
    message: '',
    privacy: false
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    // ここで実際のフォーム送信処理を実装
    // 例: API エンドポイントにPOSTリクエストを送信
    
    // 送信完了後、thanksページへリダイレクト
    await new Promise(resolve => setTimeout(resolve, 1000)); // 送信シミュレーション
    router.push('/contact/thanks');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  return (
    <div className="py-12">
      <div className="container max-w-3xl">
        <h1 className="heading-1 text-center mb-12">お問い合わせ</h1>

        <div className="card">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                会社名
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="company"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.company}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                お名前
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                メールアドレス
                <span className="text-red-500 ml-1">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                電話番号
              </label>
              <input
                type="tel"
                name="phone"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-2">
                お問い合わせ内容
                <span className="text-red-500 ml-1">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <div className="flex items-start">
              <input
                type="checkbox"
                name="privacy"
                required
                className="mt-1 h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={formData.privacy}
                onChange={handleCheckboxChange}
              />
              <label className="ml-2 block text-sm text-gray-700">
                プライバシーポリシーに同意します
                <span className="text-red-500 ml-1">*</span>
              </label>
            </div>

            <div className="text-center">
              <button
                type="submit"
                className="button-primary w-full md:w-auto md:px-12"
                disabled={loading || !formData.privacy}
              >
                {loading ? '送信中...' : '送信する'}
              </button>
            </div>
          </form>
        </div>

        <div className="mt-12 text-center text-gray-600">
          <p className="mb-4">
            お電話でのお問い合わせ
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

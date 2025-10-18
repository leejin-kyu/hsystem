import Link from "next/link";
import { siteContent } from "@/data/content";

export default function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 회사 정보 */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-blue-600 dark:text-blue-400">
              {footer.company.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm whitespace-pre-line">
              {footer.company.description}
            </p>
          </div>

          {/* 빠른 링크 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.quickLinks.title}</h3>
            <ul className="space-y-2">
              {footer.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 솔루션 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.solutions.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              {footer.solutions.items.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* 연락처 */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{footer.contact.title}</h3>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>이메일: {footer.contact.email}</li>
              <li>전화: {footer.contact.phone}</li>
              <li>주소: {footer.contact.address}</li>
            </ul>
          </div>
        </div>

        {/* 저작권 */}
        <div className="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}

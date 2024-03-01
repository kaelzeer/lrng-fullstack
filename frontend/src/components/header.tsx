import Link from 'next/link';
import Image from 'next/image';

const Header: React.FC = () => {
    return (
        <header className="header">
          <div className="logo-container">
            <Link href="/">
              <Image src="https://fineproxy.org/wp-content/uploads/2023/08/Google-Chat-logo.png" alt="Logo" width={70} height={60} />
            </Link>
          </div>
          <div className="profile">
            <Link href="/profile">
              <div>Profile</div>
            </Link>
          </div>
        </header>
      );
    };

export default Header;
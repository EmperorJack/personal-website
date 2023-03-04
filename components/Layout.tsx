import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Nav } from '@/components/Nav';

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout(props: LayoutProps) {
  const { children } = props;

  return (
    <div className="layout">
      <Header />

      <div className="layout__main">
        <div className="layout__left">
          <Nav />
        </div>

        {children}

        <div className="layout__right" />
      </div>

      <Footer />
    </div>
  );
}

import AdminLogin from '../../../components/admin/AdminLogin';
import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';



export default function LoginPage() {
  return (
    <main>
      <Navbar />
      <div className="admin-login-page">
        <AdminLogin />
      </div>
      <Footer />
    </main>
  );

}
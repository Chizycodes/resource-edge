import Hero from "../Hero";
import HR from "../HR";
import AdminLogistics from "../AdminLogistics";
import NavBar from "../NavBar";

const LandingPage = ({ user, setUser }) => {
  return (
    <div className="landing">
      <NavBar user={user} setUser={setUser} />
      <Hero />
      <HR />
      <AdminLogistics />
    </div>
  );
};

export default LandingPage;

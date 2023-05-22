import FormSignin from '../../components/signin/FormSignin';
import SideLeftSection from '../../components/signin/SideLeftSection';

const SignIn = () => {
  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex flex-wrap items-center  h-screen">
        <SideLeftSection />

        <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
          <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
              Signin Sae Ecommerce
            </h2>
            <FormSignin />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;

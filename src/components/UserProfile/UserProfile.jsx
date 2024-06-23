import UseAuth from "../../hooks/UseAuth";
import { useForm } from "react-hook-form"
import Navbar from '../Navbar/Navbar';
import { toast } from "react-toastify";

const UserProfile = () => {
    const {user, updateUserProfile, setReload} = UseAuth();
    const {displayName, photoURL, email} = user;
    const {
        register,
        handleSubmit,
      } = useForm({
        defaultValues: {
            email:  email || "Email not found",
            displayName: displayName,
            photoURL: photoURL,
        }
      })

      const onSubmit = (data) => {
        const {displayName, photoURL} = data;
        setReload(true);
        updateUserProfile(displayName, photoURL)
        .then(() => {
          setReload(false);
          toast.success("profile updated successfully")
        })
      }
  return (
  <>
  <Navbar />
    <div className="card max-w-[400px] mx-auto bg-base-100 shadow-xl py-8 my-10">
      <div>
        <img className="w-20 h-20 mx-auto rounded-full my-4" src={user?.photoURL ? photoURL : "https://i.ibb.co/QmBHkvV/user.png"} alt="" />
        <div className="px-6 mx-auto overflow-hidden text-center">
        <h3 className="text-2xl font-semibold">{displayName}</h3>
        </div>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full h-full px-6 mx-auto bg-white"
      >
        <div className="form-control">
          <label className="label">
            <span className="font-semibold">Email</span>
          </label>
          <div className="">
            <input
              className="input border-2 border-sky-100 focus:border-sky-100 focus:outline-none font-semibold w-full"
              readOnly
              {...register("email")}
            />
          </div>
        </div>
        <div className="form-control">
            <label className="label">
              <span className="font-semibold">Name</span>
            </label>
            <div className="">
              <input
                className="input border-2 border-sky-100 focus:border-sky-300 focus:outline-none font-semibold w-full "
                {...register("displayName")}
              />
          </div>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="font-semibold">PhotoURL</span>
          </label>
          <div className="">
            <input
              className="input border-2 border-sky-100 focus:border-sky-300 focus:outline-none font-semibold w-full"
              {...register("photoURL",)}
            />
          </div>
        </div>
        <div className="form-control mt-4">
          <button className="btn bg-sky-500 text-white font-bold text-xl hover:bg-sky-600 border border-sky-500 hover:border-sky-500">
            Update Profile
          </button>
        </div>
      </form>
    </div>
  </>
  );
};

export default UserProfile;

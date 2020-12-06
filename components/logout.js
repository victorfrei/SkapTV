export default function logout(){
    localStorage.setItem("PublicKey",null);
    location.replace("/login");
    }
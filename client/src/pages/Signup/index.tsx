import { Button, Link, TextField } from "@mui/material";
import React, { useState } from "react";
import CustomTextField from "../../components/CustomTextField";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useServer } from "../../contexts/ServerContext";
import { useAuth } from "../../contexts/AuthContext";
import { useSnackbar } from "../../contexts/SnackbarContext";

const Signup: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const server = useServer();
  const {login} = useAuth();
  const {handleOpen} = useSnackbar();

  const handleSignup = async () => {
    if(!email || !password || !name){
      handleOpen("Required fields are empty!", "error");
      return;
    }

    const response = await server.userCreate({email, password, name});
    if(response){
      login(response);
    }
  }

  return (
    <div className="w-screen h-screen	justify-center content-center items-center flex">
      <form className="min-h-[50vh] bg-zinc-800 w-5/6 max-w-[400px] rounded-lg flex flex-col items-center pt-8 px-5">
        <h2 className="text-white text-3xl font-light tracking-[.25em]">SIGN IN</h2>
        <CustomTextField 
          value={name} 
          label="Name" 
          onChange={(event) => setName(event.target.value)}
        />
        <CustomTextField 
          value={email} 
          label="Email" 
          onChange={(event) => setEmail(event.target.value)}
        />
        <CustomTextField 
          value={password} 
          label="Password" 
          onChange={(event) => setPassword(event.target.value)}
        />

        <Button 
          variant="contained" 
          endIcon={<ArrowForwardIcon />}
          sx={{marginTop: 4, width: "80%", maxWidth: 350, borderRadius: 5, padding: 1.10}}
          onClick={handleSignup}
        >
          Signup
        </Button>

        <p className="mt-4 text-zinc-400 mb-1 mt-auto">Already have an account? <Link href="/login">Login</Link></p>
      </form>
    </div>
  )
}

export default Signup;


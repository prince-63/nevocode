import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import IconButton from "../general/icon-button";
import { Chrome, Github, LogIn } from "lucide-react";
import { Muted } from "../ui/typography";
import { signIn } from "next-auth/react";

const AuthDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <IconButton>
          <LogIn />
        </IconButton>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-center">Sign In</DialogTitle>
          <DialogDescription className="text-center">
            Unlock Your Productive Journey! 🚀
          </DialogDescription>
        </DialogHeader>
        <div className="w-full flex flex-col gap-2">
          <Button variant="outline" size="lg" onClick={() => signIn("google")}>
            <Chrome /> Google
          </Button>
          <Button variant="outline" size="lg" onClick={() => signIn("github")}>
            <Github />
            GitHub
          </Button>
        </div>
        <DialogFooter>
          <Muted className="w-full text-center text-xs text-wrap">
            By signing in, you agree to CSExplore terms of service and privacy
            policy.
          </Muted>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;

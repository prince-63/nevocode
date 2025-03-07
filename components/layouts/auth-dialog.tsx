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
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="text-center">Sign In</DialogTitle>
          <DialogDescription className="text-center">
            Unlock Your CS Journey! 🚀
          </DialogDescription>
        </DialogHeader>
        <div className="w-64 flex flex-col gap-1">
          <Button variant="outline" size="lg" onClick={() => signIn("google")}>
            <Chrome /> Google
          </Button>
          <Button variant="outline" size="lg">
            <Github />
            GitHub
          </Button>
        </div>
        <DialogFooter>
          <Muted className="w-64 text-center text-xs text-wrap">
            By signing in, you agree to CSExplore terms of service and privacy
            policy.
          </Muted>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;

import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "@/constant";
import AuthProviders from "./AuthProviders";
import { getCurrentUser } from "@/lib/session";

const Navbar = async () => {
  const session = await getCurrentUser();
  return (
    <nav className="FlexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" width={116} height={43} alt="Flexibble" />
        </Link>
        <ul className="xl:flex hidden text-samll gap-7">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            {session?.user?.image && (
              <Image
                src={session.user.image}
                alt={session.user.name}
                className="rounded-full"
                width={40}
                height={40}
              />
            )}
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;

/** @jsx h */
import { h, useEffect, useState } from "../client_deps.ts";

export default function Main() {
  const [ip, setIp] = useState("");

  useEffect(() => {
    fetch("/api/ip")
      .then((res) => res.text())
      .then(setIp);
  }, []);

  return (
    <div>
      <p>
        {ip ? <p>Your IP is {ip}</p> : <p>Loading...</p>}
      </p>
      <p>
        API endpoint: <code>/api/ip</code>
      </p>
      <p>
        Github repo: <a href="https://github.com/sigmaSd/ip">ip</a>
      </p>
    </div>
  );
}

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
        API endpoint: <a href="/api/ip">/api/ip</a>
      </p>
      <p>
        <a href="https://github.com/sigmaSd/ip">
          https://github.com/sigmaSd/ip
        </a>
      </p>
    </div>
  );
}

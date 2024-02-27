function App() {
  const setCookie = () => {
    fetch("https://fancy-large-scale.glitch.me/set-cookie", {
      method: "GET",
      credentials: "include",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((data) => {
        console.log("Response:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div>
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log(await document.hasStorageAccess());
          }}
        >
          document.hasStorageAccess()
        </button>
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log(
              await navigator.permissions.query({ name: "storage-access" })
            );
          }}
        >
          permission
        </button>
        <button
          onClick={async (e) => {
            e.preventDefault();
            console.log(await document.requestStorageAccess());
          }}
        >
          document.requestStorageAccess()
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setCookie();
          }}
        >
          /set-cookie
        </button>
      </div>
      <br />
      <div>
        <iframe
          sandbox="allow-storage-access-by-user-activation
                  allow-scripts
                  allow-same-origin"
          src="https://fancy-large-scale.glitch.me/"
        />
      </div>
    </div>
  );
}

export default App;
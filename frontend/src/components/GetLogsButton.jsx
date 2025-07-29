
const GetLogsButton = () => {
    let org = "footalent-team-2";
    let project = "javascript-react";
    let token = ""

    const handleClick = () => {
        fetch(`https://de.sentry.io/api/0/organizations/${org}/issues/`, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Error en la petición");
        return res.json();
      })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
    };

    return (
        <button onClick={handleClick}>
            Get Logs
        </button>
    );
}

export default GetLogsButton;
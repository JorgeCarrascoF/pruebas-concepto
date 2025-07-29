
const GetLogsButton = () => {
    let org = "footalent-team-2";
    let project = "javascript-react";
    let token = "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"

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
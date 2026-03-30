
export default function Home() {
    return (
        <div>
            {localStorage.getItem("token") ? (
                <p>You are logged in</p>

            ) : (
                <p>You are not logged in</p>
            )}
        </div>
    )
}   
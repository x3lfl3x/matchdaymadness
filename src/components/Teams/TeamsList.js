import { useState } from "react"

export const TeamsList = () => {

    const [teams, setTeams] = useState([])

    const api = ""

    return (
        <>
            <div>Team List Component</div>
            <ul>
                {teams.map((team) => (
                    <li key={team.ID}>
                        <h3>{team.name}</h3>
                    </li>
                ))}
            </ul>
        </>
    )
}
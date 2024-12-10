// import { useState } from "react"

// export const TeamsList = () => {

//     const [teams, setTeams] = useState([])

//     const api = "https://localhost:7276/api/TeamsControllerAPI/GetTeams"

//     return (
//         <>
//             <div>Team List Component</div>
//             <ul>
//                 {teams.map((team) => (
//                     <li key={team.ID}>
//                         <h3>{team.name}</h3>
//                     </li>
//                 ))}
//             </ul>
//         </>
//     )
// }
import { useState, useEffect } from "react"

const TeamsList = () => {

    const [teams, setTeams] = useState([])

    useEffect(() => {
        // Fetch teams data from an API endpoint
        fetch("http://localhost:5156/api/TeamsControllerAPI/GetTeams")
            .then(response => response.json())
            .then(data => setTeams(data))
            .catch(error => console.error("Error fetching teams:", error))
    }, [])

    return (
        <>
            <div>Team List Component</div>
            <CreateEditTeam />
            <ul>
                {teams.map((team) => (
                    <li key={team.id}>
                        <h3>{team.name}</h3>
                        <h3>{team.league}</h3>
                    </li>
                ))}
            </ul>
        </>
    )
}
/*function DeleteTeam(id) {
    // Delete team data from an API endpoint
    fetch("http://localhost:5156/api/TeamsControllerAPI/DeleteTeam/" + id, {
        method: "DELETE"
    })
        .then(response => response.json())
        .then(data => console.log("Team deleted:", data))
        .catch(error => console.error("Error deleting team:", error))
        .finally(() => {
            // Show confirmation modal
            if (window.confirm("Are you sure you want to delete this team?")) {
                // If confirmed, remove the team from the list
                setTeams(prevTeams => prevTeams.filter(team => team.id !== id))
            }
        })
}*/
export default TeamsList;
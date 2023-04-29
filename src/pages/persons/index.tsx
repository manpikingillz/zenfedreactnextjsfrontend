import { useFetchPersonsQuery, useFetchPersonQuery } from '@/pages/persons/persons-api-slice'

const Person = () => {

    const { data: persons = [], isFetching: isFetchingPersons } = useFetchPersonsQuery()
    const { data: person = {}, isFetching: isFetchingPerson } = useFetchPersonQuery()

    if (isFetchingPersons) return <h1>Fetching Persons....</h1>
    return (
    <main>
        <h2><b>Persons</b></h2>

        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Address</th>
            </tr>
          </thead>

          <tbody>
              {persons.map((person: any) => (
                <tr key={person.id}>
                  <td>{person.first_name}</td>
                  <td>{person.last_name}</td>
                  <td>{person.email}</td>
                  <td>{person.phone_number}</td>
                  <td>{person.address}</td>
                </tr>
              ))}
          </tbody>
        </table>

        <br/>
        <h1><b>Single Person</b></h1>

        <div>
            { person?.first_name }
        </div>

    </main>
    )
}


export default Person;
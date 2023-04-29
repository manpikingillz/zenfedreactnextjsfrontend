import { useFetchPersonsQuery } from '@/pages/persons/persons-api-slice'

const Person = () => {

    const { data = [], isFetching } = useFetchPersonsQuery()

    return (
    <main>
        <h2>Customers</h2>

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
              {data.map((person: any) => (
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
    </main>
    )
}


export default Person;
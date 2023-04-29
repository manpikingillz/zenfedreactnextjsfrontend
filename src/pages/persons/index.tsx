import { useFetchPersonsQuery, useFetchPersonQuery, useAddPersonMutation } from '@/pages/persons/persons-api-slice'

const Person = () => {

    const { data: persons = [], isFetching: isFetchingPersons } = useFetchPersonsQuery()
    const { data: person = {}, isFetching: isFetchingPerson } = useFetchPersonQuery()
    const [ addPerson ] = useAddPersonMutation()

    if (isFetchingPersons) return <h1>Fetching Persons....</h1>

    const handleSubmit = async (event: any) => {
        // event.preventDefault();
        addPerson({first_name: 'Barnnaaa', last_name: 'Tumwe', email: 'b@gmail.com', phone_number: '09', address: 'Kla', country_id: 1})
      };
    return (
    <main>
        <h1>Add new person</h1>
        <button onClick={handleSubmit}>New Person</button>
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
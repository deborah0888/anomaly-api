// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Contacts = () => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchContacts = async () => {
//       try {
//         const token = localStorage.getItem('authToken'); // use correct key
//         const response = await axios.get('http://localhost:8000/api/admin/contacts', {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setContacts(response.data);
//       } catch (error) {
//         console.error('Error fetching contacts:', error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchContacts();
//   }, []);

//   if (loading) return <p>Loading contacts...</p>;

//   return (
//     <div className="p-4">
//       <h2 className="text-2xl font-bold mb-4">Contact Submissions</h2>
//       {contacts.length === 0 ? (
//         <p>No contacts found.</p>
//       ) : (
//         <div className="space-y-4">
//           {contacts.map((contact) => (
//             <div key={contact._id} className="p-4 border rounded shadow">
//               <p><strong>Name:</strong> {contact.name}</p>
//               <p><strong>Email:</strong> {contact.email}</p>
//               <p><strong>Message:</strong> {contact.message}</p>
//               <p className="text-sm text-gray-500">
//                 Submitted at: {new Date(contact.submittedAt).toLocaleString()}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Contacts;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const token = localStorage.getItem('authToken'); // or 'adminToken' depending on your setup
        const response = await axios.get('http://localhost:8000/api/admin/contacts', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setContacts(response.data);
      } catch (error) {
        console.error("Failed to fetch contacts", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <div>Loading contacts...</div>;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">All Contact Messages</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <div className="space-y-4">
          {contacts.map((contact) => (
            <div key={contact._id} className="border p-4 rounded shadow">
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Email:</strong> {contact.email}</p>
              <p><strong>Message:</strong> {contact.message}</p>
              <p className="text-gray-500 text-sm">
                Submitted At: {new Date(contact.submittedAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Contacts;

import React from 'react'

function User({data}) {
    if(!data) {
        return <h2>Retrieving User Info...</h2>
    }

    return (
        <div>
            <img src={data.avatar} alt=""/>

            <h2>{data.name} {data.first_name} {data.last_name}</h2>
            <p>Email: {data.email}</p>

            {!!data.terms && !!data.terms.length && (
                <div>
                    Do you agree to the Terms of Service?
                    <ul>
                        {data.terms.map((like, idx) => (
                             <li key={idx}>{like}Yes</li>
                        ))}
                    </ul>
                </div>    
            )}
        </div>
    )
}

export default User
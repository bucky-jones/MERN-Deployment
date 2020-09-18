import React, { useEffect, useState } from 'react'
import { Link, navigate } from '@reach/router';

export default props => {

    return (
        <div>
            <h3>We're sorry. We could not the pet you're looking for. Would you like to add a pet?</h3>
            <h3><Link class="text-primary" to ='/new'> Add Pet </Link></h3>
        </div>
    )
}
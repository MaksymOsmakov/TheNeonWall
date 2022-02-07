import React, { useState, useEffect } from 'react';

const ProfileStatusWithHooks = (props) => {
	let [editMode, setEditMode] = useState(false);
	let [status, setStatus] = useState(props.status);

	useEffect(() => {
		setStatus(props.status);
	}, [props.status]);

	return (
		<div>
			{!editMode &&
				<div>
					<span onClick={setEditMode}>{props.status || "No status!"}</span>
				</div>
			}
			{editMode &&
				<div>
					<input
						onBlur={() => { setEditMode(false); props.updateStatus(status) }}
						onChange={(e) => setStatus(e.currentTarget.value)}
						autoFocus={true} type="text" value={status} />
				</div>
			}
		</div>
	);
};


export default ProfileStatusWithHooks;
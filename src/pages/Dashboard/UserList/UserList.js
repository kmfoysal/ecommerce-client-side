import { Button } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { userRequest } from '../../../requestMethod';

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
          try {
            const res = await userRequest.get("allusers/?new=true");
            setUsers(res.data);
          } catch {}
        };
        getUsers();
      }, []);

  return (
    <List sx={{ width: '100%',  bgcolor: 'background.paper' }}>
      {users.map((user)=>(
          <ListItem alignItems="flex-start" key={user._id}>
          <ListItemAvatar>
            <Avatar alt="Profilr Img" src={
                user.img ||
                "https://crowd-literature.eu/wp-content/uploads/2015/01/no-avatar.gif"} />
          </ListItemAvatar>
          <ListItemText
            primary={user.name}
            secondary={
              <React.Fragment>
                <Typography
                  sx={{ display: 'inline', marginRight:'5px' }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                    {user.email} - 
                </Typography>
                {user.userName}
              </React.Fragment>
            }
          />
          <Button>Edit</Button>
          <Button>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
}

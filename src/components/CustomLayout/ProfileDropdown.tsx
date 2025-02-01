import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, MenuProps } from 'antd';
import { UserRound } from 'lucide-react';

import AuthContext from '@/contexts/auth';

export default function ProfileDropdown() {
  const { logout } = useContext(AuthContext);
  const items: MenuProps['items'] = [
    {
      label: <Link to="/account"><Button type="link">Account</Button></Link>,
      key: '0',
    },
    { label: <Button type="link" onClick={() => logout()}>Logout</Button>,
      key: '1' },
  ];
  return (
    <Dropdown menu={{ items }}>
      <Button type="link" icon=<UserRound />>
        Profile
      </Button>
    </Dropdown>
  );
}

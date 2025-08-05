import React, { useState } from 'react';
import { Button, Dropdown, Drawer } from 'antd';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const navigate = useNavigate();

  const handleUserMenuClick = ({ key }) => {
    switch (key) {
      case '1':
        navigate('/dashboard');
        break;
      case '2':
        // Preview Profile as Student logic
        break;
      case '3':
        // Logout logic
        break;
      default:
        break;
    }
  };

  const userMenuItems = [
    {
      key: '1',
      label: (
        <div className="px-4 py-2 rounded bg-blue-50 font-medium text-black">
          Dashboard
        </div>
      ),
    },
    {
      key: '2',
      label: (
        <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
          Preview Profile as Student
        </div>
      ),
    },
    {
      key: '3',
      label: (
        <div className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded">
          Logout
        </div>
      ),
    },
  ];

  const navItems = [
    { label: 'Find Tutor', path: '/find-tutor' },
    { label: 'How It Works', path: '/how-it-works' },
    { label: 'Pricing', path: '/pricing' },
    { label: 'FAQ', path: '/faq' },
  ];

  const handleNavItemClick = (path) => {
    navigate(path);
    setMobileMenuVisible(false);
  };

  return (
    <div className="w-full flex items-center justify-center h-[80px] bg-white">
      <div className="w-full max-w-[1320px] flex items-center justify-between px-4 md:px-[60px] relative">
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuVisible(true)}
            className="p-2 text-gray-700 focus:outline-none"
          >
            <img src="Burger menu.svg" alt="Menu" className="w-[24px] h-[24px]" />
          </button>
        </div>

        {/* Logo */}
        <div className="flex items-center justify-center flex-grow lg:flex-grow-0" onClick={() => navigate('/')}>
          <img
            src="logo.svg"
            alt="Logo"
            className="w-[120px] md:w-[145px] h-[40px] md:h-[50px]"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center text-[15px] font-medium text-[#181A20]">
          {navItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleNavItemClick(item.path)}
              className={`w-[106px] text-center py-1 border ${index === 0 ? 'rounded-l-full' : 'border-l-0'} ${
                index === navItems.length - 1 ? 'rounded-r-full' : ''
              } border-[#B1B1B1] cursor-pointer hover:bg-gray-100`}
            >
              {item.label}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-2 xl:space-x-2 2xl:space-x-6">
          <div className="border rounded-full p-2 cursor-pointer hover:bg-gray-100">
            <img src="shopping-bag.svg" alt="Cart" className="w-[32px] h-[32px]" />
          </div>

          <Dropdown
            menu={{ items: userMenuItems, onClick: handleUserMenuClick }}
            trigger={['click']}
            placement="bottomRight"
          >
            <div className="flex items-center border rounded-full px-3 py-1 space-x-2 cursor-pointer hover:bg-gray-100">
              <img src="Group 3.svg" alt="User" className="w-[36px] h-[36px]" />
              <span className="text-[14px] text-gray-800">Hironori Takeda</span>
              <img src="Icon.svg" alt="Dropdown" className="w-[16px] h-[16px]" />
            </div>
          </Dropdown>

          <Button
            onClick={() => navigate('/become-tutor')}
            type="primary"
            className="!rounded-full font-medium text-[16px] !h-[50px] px-6"
          >
            日本語先生になる
          </Button>
        </div>

        <div className="lg:hidden flex items-center">
          <Dropdown
            menu={{ items: userMenuItems, onClick: handleUserMenuClick }}
            trigger={['click']}
            placement="bottomRight"
          >
            <div className="flex items-center p-2 cursor-pointer hover:bg-gray-100">
              <img src="Group 3.svg" alt="User" className="w-[28px] h-[28px]" />
            </div>
          </Dropdown>
        </div>

        <Drawer
          placement="left"
          width={428}
          closable={false}
          onClose={() => setMobileMenuVisible(false)}
          open={mobileMenuVisible}
          styles={{
            header: { display: 'none' },
            body: { padding: 0 },
          }}
          className="mobile-menu-drawer"
        >
          <div className="h-full bg-white flex flex-col">
            {/* Header: X | Logo | Profile */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <button
                onClick={() => setMobileMenuVisible(false)}
                className="p-2 text-gray-700 focus:outline-none"
              >
                <img src="cross.svg" alt="Menu" className="w-[24px] h-[24px]" />
              </button>

              <img
                src="logo.svg"
                alt="Logo"
                className="w-[100px] h-[36px] object-contain"
              />

              <Dropdown
                menu={{ items: userMenuItems, onClick: handleUserMenuClick }}
                trigger={['click']}
                placement="bottomRight"
              >
                <div className="p-2 cursor-pointer hover:bg-gray-100 rounded-full">
                  <img src="Group 3.svg" alt="User" className="w-[28px] h-[28px]" />
                </div>
              </Dropdown>
            </div>

            {/* Navigation + Actions */}
            <div className="flex-1 overflow-y-auto px-[30px] py-[20px]">
              <div className="flex flex-col gap-8">
                {navItems.map((item, index) => (
                  <div
                    key={index}
                    onClick={() => handleNavItemClick(item.path)}
                    className="font-medium text-[26px] text-[#181A20] gap-[15px] flex items-center cursor-pointer"
                  >
                    <span className="text-[#B1B1B1] font-normal text-[20px] flex items-center gap-2">
                      0{index + 1}
                      <div className="w-[20px] h-[1px] bg-[#B1B1B1]" />
                    </span>
                    {item.label}
                  </div>
                ))}

                <div className="border-b border-[#B1B1B1] my-4" />

                <div className="items-center">
                  <div className="border w-full rounded-full cursor-pointer hover:bg-gray-100 !h-[50px] flex justify-center items-center">
                    <img
                      src="shopping-bag.svg"
                      className="w-[26px] h-[26px]"
                      alt="Cart"
                    />
                    <span className="text-[16px] font-medium ml-2">Cart</span>
                  </div>
                </div>

                <div>
                  <Button
                    onClick={() => navigate('/become-tutor')}
                    type="primary"
                    className="!rounded-full font-medium text-[16px] !h-[50px] w-full"
                    block
                  >
                    日本語先生になる
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  );
};

export default Navbar;

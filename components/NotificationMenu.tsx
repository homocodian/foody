import { Popover, Transition } from '@headlessui/react';
import { BellIcon } from '@heroicons/react/outline';
import { XIcon } from '@heroicons/react/outline';
import { Fragment, useState } from 'react';

function NotificationMenu() {

  const [notifiactions, setNotifications] = useState<{href: string, message: string}[] | null>([
  {
    href: "/menu",
    message: "We have got some new dishes for you."
  }, 
  {
    href: "/restaurants",
    message: "We located a brand new restaurant near you."
  }
  ]);

  const handleRemoveNotification = (id: number) => {
    const reamainingNotifications = notifiactions?.filter((_, index) => index !== id)
    reamainingNotifications && setNotifications(reamainingNotifications);
  }

  return (
    <div>
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
                ${open ? '' : 'text-opacity-90'}
                text-white group relative rounded-md inline-flex items-center mt-2 text-base font-medium hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
            >
              <BellIcon className='h-6 w-6 text-gray' />
              {(notifiactions && notifiactions.length) && <span className="bg-primary text-white absolute -top-2 -right-3 text-xs py-1 px-2 rounded-full animate-pulse">{notifiactions.length}</span>}
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute z-[1001] w-screen max-w-xs md:max-w-md px-4 mt-3 transform -translate-x-[43%] md:-translate-x-[85%] left-full sm:px-0">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="relative grid gap-8 bg-white p-7 grid-cols-1">
                    {
                      (notifiactions && notifiactions.length) ? notifiactions.map((notifiaction, index) => (
                        <div key={index} className="inline-flex justify-between items-center px-2 py-2 text-dim-gray hover:text-primary cursor-pointer">
                          <a href={notifiaction.href}>{notifiaction.message}</a>
                          <button onClick={() => handleRemoveNotification(index)}>
                            <XIcon className='w-5 h-5 text-gray hover:text-primary' />
                          </button>
                        </div>
                      )) : <div className="px-2 py-2 text-dim-gray hover:text-primary cursor-pointer">
                        No notification available
                      </div>
                    }
                  </div>
                  <div className="p-4 bg-light-gray">
                    <div
                      className="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
                    >
                      <span className="flex items-center">
                        <span className="text-sm font-medium text-gray-900">
                          Greetings,
                        </span>
                      </span>
                      <span className="block text-sm text-gray-500">
                        From Foody Team
                      </span>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  )
}

export default NotificationMenu

"use client";
import { useState } from 'react';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState('upcoming');
  const organizations = [
    {
      id: 1,
      name: 'Teach For Indonesia',
      logo: '/org-logos/cs-club.png',
      events: [
        { id: 1, title: 'Teaching kids at SDN 17 Bandung', date: '2023-11-15', attendees: 120 },
        { id: 2, title: 'Speak in Silence', date: '2023-12-05', attendees: 80 },
        { id: 3, title: 'Donor Darah', date: '2023-12-05', attendees: 80 }
      ]
    },
    {
      id: 2,
      name: 'Modelling Club Binus',
      logo: '/org-logos/student-gov.png',
      events: [
        { id: 4, title: 'Fashion Street Wear at PVJ Mall', date: '2023-11-20', attendees: 200 },
        { id: 5, title: 'Catwalk Chinese Edition', date: '2023-12-10', attendees: 50 }
      ]
    },
    {
      id: 3,
      name: "Bina Nusantara Computer Club",
      logo: '/org-logos/cs-club.png',
      events: [
        { id: 6, title: "Tech Talk: AI in Education", date: '2023-11-25', attendees: 150 },
        { id: 7, title: "Hackathon: Code for Good", date: '2023-12-15', attendees: 300 }
      ]
    },
    {
      id: 4,
      name: "STAMANARA",
      logo: '/org-logos/student-gov.png',
      events: [
        { id: 8, title: "Dance Competition Festival FCL Mall", date: '2023-11-30', attendees: 100 },
        { id: 9, titile: "Stamanara Audition 2025", date: '2025-12-20', attendees: 20 }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">College Event Hub</h1>
          <div className="flex items-center space-x-4">
            <a className="inline-block p-1 rounded-full hover:scale-105 transition-colors">
              <button className="text-gray-600 hover:text-gray-900 hover:scale-110">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </a>
            <div className="relative">
              <button className="flex items-center space-x-2">
                <span className="text-gray-700">Organizer Name</span>
                <svg className="h-5 w-5 text-gray-500" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className='relative'> 
              <Link href="/profile" passHref legacyBehavior >
                <a className="inline-block p-1 rounded-full hover:scale-105 transition-colors">
                  <button className="hover: scale-110">
                   <svg className="size-8 pt-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                     <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                   </svg>
                 </button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Tabs */}
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab('upcoming')}
              className={`${activeTab === 'upcoming' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Upcoming Events
            </button>
            <button
              onClick={() => setActiveTab('past')}
              className={`${activeTab === 'past' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Past Events
            </button>
            <button
              onClick={() => setActiveTab('organizations')}
              className={`${activeTab === 'organizations' ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'} whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
            >
              Organizations
            </button>
          </nav>
        </div>

        {/* Content */}
        <div className="mt-6">
          {activeTab === 'upcoming' && (
            <div className="space-y-6">
              {organizations.map(org => (
                <div key={org.id} className="bg-white shadow rounded-lg overflow-hidden">
                  <div className="px-6 py-4 border-b border-gray-200 flex items-center">
                    <img src={org.logo} alt={org.name} className="h-10 w-10 rounded-full mr-3" />
                    <h2 className="text-lg font-medium text-gray-900">{org.name}</h2>
                  </div>
                  <div className="divide-y divide-gray-200">
                    {org.events.map(event => (
                      <Link key={event.id} href={`/events/${event.id}`} passHref legacyBehavior>
                        <a className="block"> 
                          <div className='hover:scale-101 ease-out duration-300 px-6 py-4 flex justify-between items-center'>
                            <div>
                              <h3 className="text-md font-medium text-gray-900">{event.title}</h3>
                              <p className="text-sm text-gray-500 mt-1">
                               {new Date(event.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                              </p>
                            </div>
                            <div className="flex items-center space-x-4">
                              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                                {event.attendees} attendees
                              </span>
                            </div>
                          </div>
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'organizations' && (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {organizations.map(org => (
                <div key={org.id} className="hover:scale-101 ease-out duration-300 bg-white shadow rounded-lg overflow-hidden">
                  <div className="px-6 py-4 flex items-center">
                    <img src={org.logo} alt={org.name} className="h-12 w-12 rounded-full mr-4" />
                    <div>
                      <h2 className="text-lg font-medium text-gray-900">{org.name}</h2>
                      <p className="text-sm text-gray-500 mt-1">{org.events.length} upcoming events</p>
                    </div>
                  </div>
                  <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                    <Link href={`/organizations/${org.id}`} className="text-blue-600 hover:text-blue-500 text-sm font-medium">
                      View all events
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
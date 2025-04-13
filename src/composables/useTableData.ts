import { ref } from 'vue'

export interface IPaginatedTableData {
      picture: string,
      guestName: string,
      stayingAt: string,
      stayingAtDesc: string,
      status: string,
      statusColor: string,
      stripePayment: string,
      totalOrders: string,
      chat: string,
      reservationId: string,
      email: string,
      verifyType: string,
      ageGroup: string,
      countryOfOrigin: string,
      nationality: string,
      birthDate: string,
      reasonTravel: string,
      typeId: string,
      idNumber: string,
      modeTransport: string,
      estCheckIn: string
}

export function useTableData() {
  const paginatedTableData = ref<IPaginatedTableData[]>([
    {
      picture:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
      guestName: 'Oliver Bennett',
      stayingAt: 'The Maple Grove',
      stayingAtDesc: '19 May - 02.00PM - 26 May - 01.30PM',
      status: 'Verified',
      statusColor: 'green',
      stripePayment: '0 Payment',
      totalOrders: '0 Order',
      chat: 'Chat with us',
      reservationId: '67dd3as1343423423234asdas',
      email: 'fdonna.4324@guest.booking.com',
      verifyType: 'Individual',
      ageGroup: 'Adult',
      countryOfOrigin: 'Indonesia',
      nationality: 'Indonesia',
      birthDate: '14 Mar 1999',
      reasonTravel: 'Business',
      typeId: 'Passport',
      idNumber: '1212312312321',
      modeTransport: 'Plane',
      estCheckIn: '22 Mar 2025, 08.00 AM'
    },
    {
      picture:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        guestName: 'Ethan clark',
        stayingAt: 'The Maple Grove',
        stayingAtDesc: '19 May - 02.00PM - 26 May - 01.30PM',
        status: 'Verified',
        statusColor: 'green',
        stripePayment: '0 Payment',
        totalOrders: '0 Order',
        chat: 'Chat with us',
        reservationId: '67dd3as1343423423234asdas',
        email: 'fdonna.4324@guest.booking.com',
        verifyType: 'Individual',
        ageGroup: 'Adult',
        countryOfOrigin: 'Indonesia',
        nationality: 'Indonesia',
        birthDate: '14 Mar 1999',
        reasonTravel: 'Business',
        typeId: 'Passport',
        idNumber: '1212312312321',
        modeTransport: 'Plane',
        estCheckIn: '22 Mar 2025, 08.00 AM'
    },
    {
      picture:
        'https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80',
        guestName: 'James Wilson',
        stayingAt: 'The Maple Grove',
        stayingAtDesc: '19 May - 02.00PM - 26 May - 01.30PM',
        status: 'Verify',
        statusColor: 'red',
        stripePayment: '0 Payment',
        totalOrders: '0 Order',
        chat: 'Chat with us',
        reservationId: '67dd3as1343423423234asdas',
        email: 'fdonna.4324@guest.booking.com',
        verifyType: 'Individual',
        ageGroup: 'Adult',
        countryOfOrigin: 'Indonesia',
        nationality: 'Indonesia',
        birthDate: '14 Mar 1999',
        reasonTravel: 'Business',
        typeId: 'Passport',
        idNumber: '1212312312321',
        modeTransport: 'Plane',
        estCheckIn: '22 Mar 2025, 08.00 AM'
    },
    {
      picture:
        'https://images.unsplash.com/photo-1522609925277-66fea332c575?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&h=160&w=160&q=80',
        guestName: 'Lily Martinez',
        stayingAt: 'The Maple Grove',
        stayingAtDesc: '19 May - 02.00PM - 26 May - 01.30PM',
        status: 'Check in',
        statusColor: 'yellow',
        stripePayment: '0 Payment',
        totalOrders: '0 Order',
        chat: 'Chat with us',
        reservationId: '67dd3as1343423423234asdas',
        email: 'fdonna.4324@guest.booking.com',
        verifyType: 'Individual',
        ageGroup: 'Adult',
        countryOfOrigin: 'Indonesia',
        nationality: 'Indonesia',
        birthDate: '14 Mar 1999',
        reasonTravel: 'Business',
        typeId: 'Passport',
        idNumber: '1212312312321',
        modeTransport: 'Plane',
        estCheckIn: '22 Mar 2025, 08.00 AM'
    },
  ])

  return {
    paginatedTableData,
  }
}

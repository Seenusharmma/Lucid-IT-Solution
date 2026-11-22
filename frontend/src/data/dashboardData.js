export const dashboardData = {
    hotel: {
        sync: 'Hybrid Engine Active â€¢ Local LAN + Cloud Synced',
        kpi1: { label: 'Occupancy', val: '88.4%', sub: '+6.2% vs last wk' },
        kpi2: { label: 'Check-Ins', val: '42 / 48', sub: '6 VIP arrivals' },
        kpi3: { label: 'OTA Sync', val: '99.98%', sub: '2-Way Instant' },
        bars: [45, 62, 58, 75, 88, 94, 82],
        feed: [
            { icon: 'key-round', text: 'Suite 402 Checked-In (OTA Sync)', time: 'Just now', badge: 'bg-emerald-500/20 text-emerald-300' },
            { icon: 'sparkles', text: 'Room 218 Housekeeping Cleared', time: '4m ago', badge: 'bg-blue-500/20 text-blue-300' },
            { icon: 'check-circle', text: 'Folio #8821 Express Checkout', time: '11m ago', badge: 'bg-amber-500/20 text-amber-300' }
        ]
    },
    pos: {
        sync: 'Offline-Ready POS â€¢ Instant KOT Routing Active',
        kpi1: { label: 'Active Tables', val: '24 / 32', sub: '75% floor active' },
        kpi2: { label: 'Online Orders', val: '118', sub: 'Swiggy & Zomato' },
        kpi3: { label: 'Avg KOT Time', val: '6.4m', sub: 'Kitchen on pace' },
        bars: [35, 50, 78, 92, 85, 70, 96],
        feed: [
            { icon: 'utensils', text: 'Table 12 KOT #884 sent to Bar & Grill', time: 'Just now', badge: 'bg-crimson-500/20 text-crimson-300' },
            { icon: 'bike', text: 'Zomato Order #4021 Auto-Accepted', time: '2m ago', badge: 'bg-amber-500/20 text-amber-300' },
            { icon: 'smartphone', text: 'Captain App Order â€” Table 07', time: '6m ago', badge: 'bg-emerald-500/20 text-emerald-300' }
        ]
    },
    club: {
        sync: 'Club ERP Live â€¢ Smart Card & App Synced',
        kpi1: { label: 'Members In', val: '312', sub: 'Peak evening' },
        kpi2: { label: 'Active Outlets', val: '6 / 6', sub: 'Bar, Lawn, Dining' },
        kpi3: { label: 'RFID Swipes', val: '486', sub: 'Auto-posted' },
        bars: [30, 42, 60, 68, 84, 95, 90],
        feed: [
            { icon: 'id-card', text: 'Member #M-1042 RFID Smart Card Swipe', time: 'Just now', badge: 'bg-emerald-500/20 text-emerald-300' },
            { icon: 'wine', text: 'Permit Room Order Posted to Member A/C', time: '5m ago', badge: 'bg-blue-500/20 text-blue-300' },
            { icon: 'calendar', text: 'Banquet Lawn Booking Confirmed', time: '14m ago', badge: 'bg-amber-500/20 text-amber-300' }
        ]
    }
};

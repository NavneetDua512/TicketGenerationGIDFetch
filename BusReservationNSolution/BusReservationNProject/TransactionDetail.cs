//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace BusReservationNProject
{
    using System;
    using System.Collections.Generic;
    
    public partial class TransactionDetail
    {
        public int TransactionID { get; set; }
        public int PNR { get; set; }
        public System.DateTime PaymentDate { get; set; }
        public System.TimeSpan PaymentTime { get; set; }
        public int Amount { get; set; }
        public string ModeOfPayment { get; set; }
        public bool PaymentStatus { get; set; }
    
        public virtual Ticket Ticket { get; set; }
    }
}
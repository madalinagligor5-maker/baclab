/** O lecție = text explicativ, pe secțiuni, pentru un capitol. Conținutul este de recapitulare, nu înlocuiește manualul. */
export interface LectieSectiune {
  titlu: string;
  /** paragrafe de text */
  text?: string[];
  /** listă cu puncte */
  puncte?: string[];
}

export interface Lectie {
  /** codul capitolului, ex. "A01" */
  code: string;
  /** o idee, în 1–2 fraze: despre ce este capitolul și de ce contează */
  intro: string;
  sectiuni: LectieSectiune[];
  /** ce trebuie reținut obligatoriu */
  retine: string[];
  /** greșeli frecvente la examen */
  capcane: string[];
}

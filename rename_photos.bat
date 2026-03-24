@echo off
echo Renaming faculty photos to Vercel-safe names...
cd /d "d:\Depa_Website\College-Department-Website\public\Administration"

ren "Dr. A.A. Takate.jpeg"      "takate_aa.jpeg"
ren "Prof. A.D. Gangarde.jpeg"  "gangarde_ad.jpeg"
ren "Prof. K.S. Choure.jpeg"    "choure_ks.jpeg"
ren "Prof. M.A. Karkhile.jpeg"  "karkhile_ma.jpeg"
ren "Prof. M.B. Bhingare.jpeg"  "bhingare_mb.jpeg"
ren "Prof. M.B. Gobare.jpeg"    "gobare_mb.jpeg"
ren "Prof. M.J. Jasud.jpeg"     "jasud_mj.jpeg"
ren "Prof. M.R. Choudhary.jpeg" "choudhary_mr.jpeg"
ren "Prof. S.B. Khalekar.jpeg"  "khalekar_sb.jpeg"
ren "Prof. S.S. Kale.jpeg"      "kale_ss.jpeg"

echo Done! Files renamed:
dir /B *.jpeg
pause

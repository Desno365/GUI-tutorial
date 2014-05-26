// GUI tutorial by Desno365

var currentActivity = com.mojang.minecraftpe.MainActivity.currentMainActivity.get();

function procCmd(command)
{
	switch(command)
	{
		case 'Simple-popup':
		case 'simple-popup':
		case 'simple-Popup':
		case 'Simple-Popup':
		{
			simplePopup();
			break;
		}
		case 'Popup-ok':
		case 'popup-ok':
		case 'popup-OK':
		case 'Popup-OK':
		{
			popupWithOkAndCancel();
			break;
		}
	}
}

function simplePopup()
{
	currentActivity.runOnUiThread(new java.lang.Runnable()
	{
		run: function()
		{
			try
			{
				var layout = new android.widget.LinearLayout(currentActivity);
				layout.setOrientation(android.widget.LinearLayout.VERTICAL);

				var scroll = new android.widget.ScrollView(currentActivity);
				scroll.addView(layout);
			
				var popup = new android.app.Dialog(currentActivity); 
				popup.setContentView(scroll);
				popup.setTitle("Tutorial");

				var infoText = new android.widget.TextView(currentActivity);
				infoText.setText("This Popup has a Linear Layout and a Scroll View.\n\nYou can write everything you want in this TextView.");
				layout.addView(infoText);

				var colorText = new android.widget.TextView(currentActivity);
				colorText.setText("You can also set a color for the text.");
				colorText.setTextColor(android.graphics.Color.BLUE);
				layout.addView(colorText);

				var urlButton = new android.widget.Button(currentActivity); 
				urlButton.setText("Visit URL (google.com)"); 
				urlButton.setOnClickListener(new android.view.View.OnClickListener()
				{ 
					onClick: function()
					{
						var intentURL = new android.content.Intent(currentActivity);
						intentURL.setAction(android.content.Intent.ACTION_VIEW);
						intentURL.setData(android.net.Uri.parse("http://google.com"));
						currentActivity.startActivity(intentURL);

						popup.dismiss();
					}
				}); 
				layout.addView(urlButton);

				var otherPopupButton = new android.widget.Button(currentActivity); 
				otherPopupButton.setText("Popup with OK and Cancel");
				otherPopupButton.setOnClickListener(new android.view.View.OnClickListener()
				{ 
					onClick: function()
					{
						popupWithOkAndCancel();
						popup.dismiss();
					}
				}); 
				layout.addView(otherPopupButton);

				var exitButton = new android.widget.Button(currentActivity); 
				exitButton.setText("Close");
				exitButton.setOnClickListener(new android.view.View.OnClickListener()
				{ 
					onClick: function()
					{ 
						popup.dismiss();
					}
				}); 
				layout.addView(exitButton);
				

				popup.show();
			
			}catch (err)
			{
				clientMessage("Error: " + err);
				clientMessage("Maybe GUI is not supported for your device.");
			}
		}
	});
}

function popupWithOkAndCancel()
{
	currentActivity.runOnUiThread(new java.lang.Runnable()
	{
		run: function()
		{
			try
			{

				var layout1 = new android.widget.LinearLayout(currentActivity);
				layout1.setOrientation(android.widget.LinearLayout.VERTICAL);
				
				var popup1 = new android.app.AlertDialog.Builder(currentActivity);
				popup1.setView(layout1);
				popup1.setTitle("Tutorial");

				var infoText1 = new android.widget.TextView(currentActivity);
				infoText1.setText("This Popup has a Linear Layout.\n\nYou can write everything you want in this TextView");
				layout1.addView(infoText1);

				var colorText1 = new android.widget.TextView(currentActivity);
				colorText1.setText("You can also set a color for the text.");
				colorText1.setTextColor(android.graphics.Color.RED);
				layout1.addView(colorText1);
			
				popup1.setPositiveButton("OK", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg)
					{
						android.widget.Toast.makeText(currentActivity,"OK",0).show();
					}});

				popup1.setNegativeButton("Cancel", new android.content.DialogInterface.OnClickListener(){
					onClick: function(viewarg)
					{
						android.widget.Toast.makeText(currentActivity,"Cancel",0).show();
					}});
			

				popup1.show();

			}catch (err)
			{
				clientMessage("Error: " + err);
				clientMessage("Maybe GUI is not supported for your device.");
			}
		}
	});
}
